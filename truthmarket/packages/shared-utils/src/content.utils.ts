export const getContentTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    VIDEO: 'Video',
    ARTICLE: 'Article',
    AUDIO: 'Audio',
    PHOTO: 'Photo',
    ANALYSIS: 'Analysis',
    NEWS: 'News',
    PRODUCT: 'Product',
    PERSON: 'Person'
  };
  return labels[type] || type;
};

export const getContentTypeRoute = (type: string): string => {
  return `/content/${type.toLowerCase()}`;
};
