export const formatAddress = (value) => {
    
    return value.substring(0,10) + "..." + value.substring(value.length -3,);
  }
  export const formatString = (value) => {
   
    return value.substring(0,28) + "..." + value.substring(value.length -14,);
  }
  export const formatMString = (value) => {
   
    return value.substring(0,15) + "..." + value.substring(value.length -8,);
  }
  export const truncate = (value) => {
    return value.trim(0,5)
  }
  export const handleCopy = (value) => {
    navigator.clipboard.writeText(value).then(
      () => {
       
        alert('address copied to clip Board')
      },
      (err) => {
        // Failed to copy to clipboard
        console.error('Could not copy address: ', err);
      }
    );
  }