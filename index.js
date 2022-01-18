export default async function handle(promise) {
    try {
        return [await promise, null];
    }
    catch (e) {
        return [null, e];
    }
}
