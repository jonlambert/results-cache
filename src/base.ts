export interface CacheDriver {
  get(key: string): Promise<unknown>;
  set(key: string, value: unknown): Promise<void>;
  exists(key: string): Promise<boolean>;

  connect?(): Promise<void>;
  connected?(): boolean;
}
