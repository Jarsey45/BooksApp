import React from 'react';
import { AppBar, InputBase, Typography, Toolbar, Theme, createStyles, makeStyles, Icon } from '@material-ui/core';

import './Search.scss';

interface SearchBarProps {
  handleInput: React.Dispatch<React.SetStateAction<string>>
  inputVal: string,
}



//Responsive styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    },
    searchBar: {
      width: "100%",
      marginLeft: '0',
      marginRight: '0',
      flex: 1,
      [theme.breakpoints.up('md')]: {
        marginLeft: '2em',
        marginRight: '1em',
        width: 'auto',
      },
    },
  })
)



const SearchBar: React.FC<SearchBarProps> = (
  { handleInput, inputVal }
) => {
  const classes = useStyles();


  return (
    <AppBar
      position="static"
      id="bar"
    >
      <Toolbar>
        <Typography
          variant="h5"
          className={`title ${classes.title}`}
          noWrap
        >
          Books App
        </Typography>

        <div className={`search ${classes.searchBar}`}>
          <div className="icon">
            <Icon>search</Icon>
          </div>
          <InputBase
            placeholder="Search for book..."
            classes={{
              root: "inputRoot",
              input: "inputText"
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={inputVal}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              handleInput(e.target.value as string);
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default SearchBar