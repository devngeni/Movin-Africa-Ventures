export function shareToMedia(blocks: any) {
  let textContent = "";

  // loop through each block of postData.body and extract text content
  blocks.forEach((block: any) => {
    if (block._type === "block" && block.children) {
      block.children.forEach((child: any) => {
        if (child._type === "span" && child.text) {
          textContent += child.text;
        }
      });
    }
  });

  const encodedText = encodeURIComponent(textContent);
  return encodedText;
}
