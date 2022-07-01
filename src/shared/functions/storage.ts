export function selectStorage<T>(key: string) {
    function get(): T {
        const value = localStorage.getItem(key);
        return JSON.parse(<string>value);
    }

    function set(value: T) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    return { get, set };
};

