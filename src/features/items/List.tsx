import { Box, Button, List as MList, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

import { createRandomWords } from '../../data'
// @ts-ignore
import { addItem, removeItem } from './itemsSlice'
import { useDispatch, useSelector } from 'react-redux'

const List = () => {

    const dispatch = useDispatch()

    const randomWords = useSelector((state:any)=> state.items)

    const handleItemAdd = (item: any) => dispatch(addItem(item))
    const handleItemRemove = (item: any) => dispatch(removeItem(item))
    
    const renderedList = randomWords.map((item: string) => {
        return (
            <ListItem disablePadding key={item}>
                <ListItemButton onClick={()=> handleItemRemove(item)}>
                    <ListItemIcon><DeleteIcon color="primary"/></ListItemIcon>
                    <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
        )
    })

    return (
        <Box sx={{ width: '100%'}}>
            <Button onClick={()=> handleItemAdd(createRandomWords())}>
                Add Random Item to List
            </Button>
            <MList>
                {renderedList}
            </MList>
        </Box>
    )
}

export default List