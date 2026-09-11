interface BrandLoaderProps {
  visible: boolean;
}

export default function BrandLoader({ visible }: BrandLoaderProps) {
  return (
    <div
      className={`brand-loader fixed inset-0 z-[100] flex items-center justify-center bg-ink-950 ${
        visible ? 'brand-loader--visible' : 'brand-loader--hidden'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center">
        <div className="brand-loader__mark-wrap">
          <img
            src="/images/sudesa-logo-mark-tm.jpeg"
            alt=""
            className="brand-mark brand-loader__mark"
          />
        </div>
        <span className="brand-loader__line" />
      </div>
    </div>
  );
}
