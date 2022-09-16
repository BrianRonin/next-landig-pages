export const mapSectionsMetadata = (metadata = {}) => {
  const { name = '', section_id: id = '', background = false } = metadata
  return { name, id, background }
}
