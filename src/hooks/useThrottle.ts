import { useCallback, useEffect, useRef } from "react";

import throttle from "lodash/throttle";

const options = { leading: true, trailing: false };

export function useThrottle(
  cb: (...args: any[]) => void | undefined,
  delay: number | undefined
): () => void {
  const cbRef = useRef(cb);

  useEffect(() => {
    cbRef.current = cb;
  });

  return useCallback(
    throttle((...args) => cbRef.current(...args), delay, options),
    [delay]
  );
}
