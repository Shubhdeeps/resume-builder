import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import PaletteIcon from '@mui/icons-material/Palette';
import PhotoCameraSharpIcon from '@mui/icons-material/PhotoCameraSharp';
import TextureIcon from '@mui/icons-material/Texture';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InfoIcon from '@mui/icons-material/Info';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import { useRouter } from "next/router";
import { useActiveStore } from '../../store/store.js'

const navItems = [{text: "home", icon: <HomeIcon />}, 
{text: "font", icon: <FontDownloadIcon />},
{text: "theme", icon: <PaletteIcon />},
{text: "photo", icon: <PhotoCameraSharpIcon />}, 
{text: "background", icon: <TextureIcon />},
{text: "icons", icon: <EmojiEmotionsIcon />}, 
{text: "info", icon: <InfoIcon />},
{text: "personal", icon: <FolderSharedIcon />}];

const Toolbarlist = () => {

  const capFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const route = useRouter()

  const handleClick = (path) => {
    route.push(`/main/${path}`)
  }

  const active = useActiveStore (state => state.active)


    return(
        <List>
        {navItems.map((x) => 
          (
          <ListItem 
          button 
          onClick={() => handleClick(x.text)}
          key={x.text}>
            
            <ListItemIcon className={x.text === active ? 'active' : null} >
                {x.icon}
            </ListItemIcon>
            <ListItemText primary={capFirst(x.text)} 
            className={x.text === active ? 'active' : null} />
          </ListItem>
        ))}
      </List>
    )
}

export default Toolbarlist;