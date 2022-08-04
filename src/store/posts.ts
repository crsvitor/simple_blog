import { reactive, readonly } from 'vue';
/**
  reactive -> ref for objects {}, Map, Set and not primitives data
  readonly -> it will reactively update the dom but won't let modify the value
*/

interface PostState {
  foo: string;
}

export class PostsStore {
  #state: PostState;

  constructor() {
    this.#state = reactive<PostState>({
      foo: 'foo'
    })
  }

  getState() {
    return readonly(this.#state);
  }

  updateFoo(foo: string) {
    this.#state.foo = foo;
  }
}

const store = new PostsStore();

/**
  composables -> a way to get data through different contexts and components
 */
export function usePosts() {
  return store;
}