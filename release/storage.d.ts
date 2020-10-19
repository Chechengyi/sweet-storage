export default Storage;

export as namespace Storage;

declare namespace Storage {
    type Key = string;
    type Value = string | number;
    type Time = number;

    interface Session {
        get: (key: Key) => string;
        save: (key: Key, value: Value) => void;
        remove: (key: Key, value: Value) => void;
        clear: () => void;
    }

    function get(key: Key): string;
    function save(key: Key, value: Value, time?: Time): void;
    function remove(key: Key): void;
    function clear(): void;
    const session: Session;
    function on(key: Key, fn: Function): void;
    function off(key: Key, fn?: Function): void;
}
