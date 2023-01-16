export function addSmartTag(newSmartTag) {
  return {
    type: "ADICIONAR_TAG",
    payload: newSmartTag,
  };
}

export function delSmartTag(oldSmartTag) {
  return {
    type: "REMOVER_TAG",
    payload: oldSmartTag,
  };
}
