export const mapSectionsMetadata = (metadata: any = {}): typeof returnValue => {
  const { name = '', section_id: id = '', background = false } = metadata

  const returnValue = {
    name,
    id,
    background,
  } as { name: string; id: string; background: boolean }

  return returnValue
}
