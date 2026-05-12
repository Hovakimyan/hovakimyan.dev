import Image from "next/image";

export default function PortraitFile() {
  return (
    <article className="sh-content sh-image-preview">
      <header className="sh-image-preview-head">
        <div>
          <p className="label">image preview</p>
          <h1>portrait.jpg</h1>
        </div>
        <ul className="meta">
          <li>
            <span className="k">format</span>
            <span className="v">JPEG</span>
          </li>
          <li>
            <span className="k">dimensions</span>
            <span className="v">4000 × 4000</span>
          </li>
          <li>
            <span className="k">treatment</span>
            <span className="v">B&amp;W</span>
          </li>
          <li>
            <span className="k">path</span>
            <span className="v">public/images/sergey-portrait.jpg</span>
          </li>
        </ul>
      </header>
      <figure className="sh-image-preview-figure">
        <Image
          src="/images/sergey-portrait.jpg"
          alt="Sergey Hovakimyan — black-and-white studio portrait"
          width={1200}
          height={1200}
          sizes="(max-width: 760px) 90vw, min(560px, 55vw)"
          priority
        />
      </figure>
    </article>
  );
}
