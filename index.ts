export default async function handle<T>(
  promise: Promise<T>
): Promise<[T, Error]> {
  try {
    return [await promise, null];
  } catch (e) {
    return [null, e];
  }
}
