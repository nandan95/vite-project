

const useFormikHelper =()=>{

    const handleAddMore = (
        values,
        push
      ) => {
        const lastRow = values.data[values.data.length - 1];
    
        const isLastRowValid =
          lastRow.name &&
          lastRow.email 
    
        if (!isLastRowValid) {
          alert( "Please complete all mandatory fields before adding more.");
          return;
        }
    
        if (values.data.length >= 10) {
          alert( "Cost & Inventory cannot exceed more than 10");
          return;
        }
    
        push({
          name: "",
          email: "",
        });
      };

      return {
        handleAddMore
      }
}

export default  useFormikHelper ;