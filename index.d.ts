export default function handle<T>(promise: Promise<T>): Promise<[T, Error]>;
