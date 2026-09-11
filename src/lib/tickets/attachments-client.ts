import { MAX_TICKET_ATTACHMENTS, MAX_TICKET_ATTACHMENT_BYTES } from "@/lib/validation/tickets";

export { MAX_TICKET_ATTACHMENTS, MAX_TICKET_ATTACHMENT_BYTES };

export function readImageAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

// Picks up to `remaining` valid image files from a FileList/array, skipping
// non-images and oversized files. Returns the accepted data URLs plus any
// rejection reasons for feedback.
export async function processImageFiles(
  files: FileList | File[],
  remaining: number
): Promise<{ accepted: string[]; rejected: string[] }> {
  const accepted: string[] = [];
  const rejected: string[] = [];

  for (const file of Array.from(files)) {
    if (accepted.length >= remaining) {
      rejected.push(`${file.name}: too many images (max ${MAX_TICKET_ATTACHMENTS})`);
      continue;
    }
    if (!file.type.startsWith("image/")) {
      rejected.push(`${file.name}: not an image`);
      continue;
    }
    if (file.size > MAX_TICKET_ATTACHMENT_BYTES) {
      rejected.push(`${file.name}: too large (max 2MB)`);
      continue;
    }
    try {
      accepted.push(await readImageAsDataUrl(file));
    } catch {
      rejected.push(`${file.name}: failed to read`);
    }
  }

  return { accepted, rejected };
}
