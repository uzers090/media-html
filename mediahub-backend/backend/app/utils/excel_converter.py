from pydantic import BaseModel
from typing import List, Dict, Any
import pandas as pd
from datetime import datetime

class ExcelConverter:
    
    def convert(self, data: List[BaseModel]) -> str:
        try:
            # Convert each Pydantic model instance to a dictionary
            data_dicts = [item.model_dump() for item in data]
            
            # Create a DataFrame from the list of dictionaries
            df = pd.DataFrame(data_dicts)
            
            # Save the DataFrame to an Excel file
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"quotes_{timestamp}.xlsx"
            df.to_excel(filename, index=False)
            return filename
        except Exception as e:
            raise e
    
    def convert_all(self, data_dict: Dict[str, List[Any]]) -> str:
        try:
            # Check if the input dictionary is empty
            if not data_dict:
                raise ValueError("Input data dictionary is empty. At least one sheet with data is required.")
            
            # Generate a timestamp for the filename
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"leads_{timestamp}.xlsx"
            
            # Create at least one default sheet with data to ensure the file is valid
            default_data = pd.DataFrame({"Message": ["No data available"]})
            
            # Use ExcelWriter to write multiple sheets to the same file
            with pd.ExcelWriter(filename, engine='openpyxl') as writer:
                print("Started Writing")
                sheets_written = 0  # Track if any sheets are written
                
                for sheet_name, data in data_dict.items():
                    # Skip if the data list is empty
                    if not data:
                        print(f"Skipping empty data for sheet: {sheet_name}")
                        continue
                    
                    try:
                        # Try to convert each item to a dictionary
                        if hasattr(data[0], 'model_dump'):
                            data_dicts = [item.model_dump() for item in data]
                        elif hasattr(data[0], 'dict'):
                            data_dicts = [item.dict() for item in data]
                        else:
                            # If items are already dictionaries or have __dict__ attribute
                            data_dicts = [item.__dict__ if hasattr(item, '__dict__') else item for item in data]
                        
                        # Create and write the DataFrame if data_dicts is not empty
                        if data_dicts:
                            df = pd.DataFrame(data_dicts)
                            df.to_excel(writer, sheet_name=sheet_name, index=False)
                            sheets_written += 1
                    except Exception as e:
                        print(f"Error processing sheet {sheet_name}: {e}")
                
                # If no sheets were written, write the default sheet
                if sheets_written == 0:
                    default_data.to_excel(writer, sheet_name="No Data", index=False)
                    print("No valid data sheets, writing default sheet")
            
            print(f"Excel file created: {filename}")
            return filename
        except Exception as e:
            print(f"Failed to convert data to Excel: {e}")
            raise e