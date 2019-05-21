const reducer = (state = {verticalSet: false, PDF: null, downloadedPdf: null, portfolioDetails: null, images: {}}, action) => {
    let newState = {...state}
    switch(action.type) {
        case 'VERTICAL_SET':
          newState.verticalSet = action.data;
          return newState;
        case 'LOAD_PDF':
          newState = {...state}
          newState.PDF = action.data;
          return newState;
        case 'DOWNLOAD_PDF':
          newState = {...state}
          newState.downloadedPdf = action.data;
          return newState;
        case 'PORT_FOLIO_DETAILS':
          newState.portfolioDetails = action.data;
          return newState;
        case 'PORT_FOLIO_IMAGE_DETAILS':
          newState.images[action.images.index] = action.images.images;
          return newState;
        default:
          return newState;
      }
}
export default reducer;