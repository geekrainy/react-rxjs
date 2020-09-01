import { Observable } from "rxjs"
import internalShareLatest from "./internal/share-latest"
import { takeUntilComplete } from "./internal/take-until-complete"

/**
 * A RxJS pipeable operator which shares and replays the latest emitted value.
 * It's the equivalent of:
 *
 * ```ts
 *  source$.pipe(
 *    multicast(() => new ReplaySubject<T>(1)),
 *    refCount(),
 *  )
 * ```
 *
 * @remarks The enhanced observables returned from `connectObservable` and
 * `connectFactoryObservable` have been enhanced with this operator.
 */
export const shareLatest = <T>() => (source$: Observable<T>) =>
  takeUntilComplete(internalShareLatest(source$))