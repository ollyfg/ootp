import { useSignal } from "@preact/signals";
import { css } from "@linaria/core";
import {
  Scanner as QRScanner,
  IDetectedBarcode,
} from "@yudiel/react-qr-scanner";
import { COLORS } from "../constants";

const styles = {
  roundedContainer: css`
    border-radius: 1em;
    border: 1px ${COLORS.black} solid;
    overflow: hidden;
    width: fit-content;
  `,
  squareContainer: css`
    max-width: 20em;
    aspect-ratio: 1;
  `,
};

export function Scanner() {
  const paused = useSignal(false);
  const result = useSignal<any>(undefined);

  const onScan = (detectedCodes: IDetectedBarcode[]) => {
    paused.value = true;
    console.log(detectedCodes);
    result.value = detectedCodes;

    setTimeout(() => {
      paused.value = false;
    }, 1000);
  };

  return (
    <>
      <div className={styles.roundedContainer}>
        <div className={styles.squareContainer}>
          <QRScanner
            onScan={onScan}
            paused={paused.value}
            formats={["qr_code"]}
            scanDelay={500}
            components={{
              finder: false,
            }}
            styles={{
              video: {
                objectFit: "cover",
                objectPosition: "50% 50%",
              },
            }}
          />
        </div>
      </div>
      <h3>Result</h3>
      <pre>{JSON.stringify(result.value, null, 2)}</pre>
    </>
  );
}
