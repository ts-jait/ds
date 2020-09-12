var Node = function (key, value, next = null, prev = null) {
  this.key = key;
  this.value = value;
  this.next = next;
  this.prev = prev;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity = 4) {
  this.capacity = capacity;
  this.cache = {};
  this.size = 0;
  this.head = this.tail = undefined;
};

LRUCache.prototype.get = function (key) {
  if (this.cache[key]) {
    const value = this.cache[key].value;
    this.remove(key);
    this.put(key, value);
    return value;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    this.remove(key);
  }
  this.ensureLimit();

  if (!this.head) {
    this.head = this.tail = new Node(key, value);
  } else {
    const node = new Node(key, value, this.head);
    this.head.prev = node;
    this.head = node;
  }
  this.cache[key] = this.head;
  this.size++;
};

LRUCache.prototype.ensureLimit = function () {
  if (this.size === this.capacity) {
    this.remove(this.tail.key);
  }
};

LRUCache.prototype.remove = function (key) {
  const node = this.cache[key];
  let prev = node.prev;
  let next = node.next;
  if (prev !== null) {
    prev.next = next;
  } else {
    this.head = node.next;
  }
  if (next !== null) {
    next.prev = prev;
  } else {
    this.tail = node.prev;
  }

  this.size--;
  delete this.cache[key];
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
/*var cache = new LRUCache( 3);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4*/
var cache = new LRUCache(3);
cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
cache.put(4, 4);
cache.get(4);
cache.get(3);
cache.get(2);
cache.get(1);
cache.put(5, 5);
cache.get(1);
cache.get(2);
cache.get(3);
cache.get(4);
cache.get(5);
// console.log(cache);
// ["LRUCache","get","put","get","put","put","get","get"]
// [[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]
//[[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]]
