export const getLocalStorageItem = <T>(key: string): T | null => {
    const storedItem = localStorage.getItem(key)
    if (!storedItem) return null
    return JSON.parse(storedItem) as T
}