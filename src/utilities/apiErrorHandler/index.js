const apiRequestErrorHandler = (e) => {
  try {
    if (!e.response) {
      return "Network Error";
    } else if (e.response.data) {
      const erd = e.response.data;
      
      if (erd.detail){
        return erd.detail;
      }
      //console.log(erd)
      return erd.non_field_errors[0];
    }
  }
  catch (error) {
    console.log(error)
    return "Something went wrong, please contact the site administration."
  }
}

export default apiRequestErrorHandler;
