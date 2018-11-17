const apiRequestErrorHandler = (e) => {
  try {
    if (!e.response) {
      return "Network Error";
    } else if (e.response.data) {
      const erd = e.response.data;
      
      if (erd.detail){
        return erd.detail;
      }
      
      if (erd.non_field_errors){
        return erd.non_field_errors[0];
      }
      
      if (erd[0]) return erd[0];
      
      // Handle field errors
      const key = Object.keys(erd)[0];
      const errorMessage = erd[key][0];
      const errorField = String(key);
      console.log(errorField);
      return (
        errorField.charAt(0).toUpperCase() +
        errorField.substring(1) + ":  " +
        errorMessage
      );
    }
  }
  catch (error) {
    console.log(error)
    return "Something went wrong, please contact the site administration."
  }
}

export default apiRequestErrorHandler;
