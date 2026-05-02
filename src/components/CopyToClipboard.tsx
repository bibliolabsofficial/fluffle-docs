import { useState } from 'react';

interface Props {
  code: string;
}

export default function CopyButton({ code }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button className="code__copy" onClick={handleCopy} aria-label="Copy code" type="button">
      <span className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} />
      <span className="code__copy-label">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}
