import { signalStore, withState, withMethods, patchState, withHooks } from '@ngrx/signals';
type MessagesState = {
  items: any[];
};

const initialState: MessagesState = {
  items: [],
};

export const MessagesStore = signalStore(
  { providedIn: 'root' }, 
  withState(initialState),
  withMethods((store) => ({
    loadAll() {
      const save = localStorage.getItem('messages');
      const items = save ? JSON.parse(save) : [];
      patchState(store, { items });
    },
    addMessage(nouveau: any) {
      const updatedItems = [...store.items(), nouveau];
      localStorage.setItem('messages', JSON.stringify(updatedItems));
      patchState(store, { items: updatedItems });
    },
    removeMessage(id: number) {
      const updatedItems = store.items().filter(m => m.ID !== id);
      localStorage.setItem('messages', JSON.stringify(updatedItems));
      patchState(store, { items: updatedItems });
    }
  })),
  withHooks({
    onInit(store) {
      store.loadAll();
    },
  })
);