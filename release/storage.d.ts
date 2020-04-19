
interface Session {
  get: (key: string) => string;
  save: (key: string, value: string) => void;
  remove: (key: string, value: string) => void;
  clear: () => void;
}

declare namespace Storage {
  function get(key: string): string;
  function save(key: string, value: string, time?: number);
  function remove(key: string);
  function clear(): void;
  const session: Session
  function on(key: string, fn: Function): void
  function off(key: string, fn?: Function): void;
}

export as namespace Storage;

export = Storage;