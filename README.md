"# GraphQL" 


# Query 
``` {
  stations {
    Title
    AddressLine1
    Town
    StateOrProvince
    Postcode
    Connections{
      id
      ConnectionTypeID{
        id
        FormalName
        Title
      }
      LevelID{
        id
        Comments
        IsFastChargeCapable
        Title      
      }
      CurrentTypeID{
        id
      	Description
      	Title
      }
      Quantity
      
    }

  }
} 
``` 

# muistio
