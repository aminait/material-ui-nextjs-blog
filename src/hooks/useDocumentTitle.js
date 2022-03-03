import React, { useEffect, useState } from 'react';

export function useDocumentTitle(title) {
  const [docTitle, setDocTitle] = useState(title);
  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return [docTitle, setDocTitle];
}
