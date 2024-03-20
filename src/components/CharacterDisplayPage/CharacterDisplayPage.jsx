import axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Attribute from '../Attribute/Attribute';
import CharacterName from '../CharacterName/CharacterName';
import CharacterOverview from '../CharacterOverview/CharacterOverview';
import DiceResult from '../DiceResult/DiceResult';
import OtherStats from '../OtherStats/OtherStats';
import TextComponent from '../TextComponent/TextComponent';
import WoundedStatus from '../WoundedStatus/WoundedStatus';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function CharacterDisplayPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const character = useSelector(store => store.character);
    const [open, setOpen] = useState(false);    // for the delete character confirmation dialog

    const fetchSingleCharacter = () => {
        // clear it out on page load
        dispatch({type: 'CLEAR_CHARACTER'});
        
        dispatch({type: 'FETCH_CHARACTER', payload: id});
    }

    // for the delete character confirmation dialog
    const handleOpen = () => {
        setOpen(true);
    };

    // for the delete character confirmation dialog
    const handleClose = () => {
        setOpen(false);
    };

    // called by the delete character confirmation dialog
    const handleDelete = () => {
        setOpen(false);
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            };
        axios.delete(`/api/character/${character.id}`, config)
        .then(response => {
            history.push('/character-selection');
        }).catch(error => {
            console.log('Error in DELETE', error);
        });
    }

    useEffect(fetchSingleCharacter, []);

    return <>
        {character.character_name ? <>
            <Grid container spacing={2}>
                <Grid xs={12} display="flex" justifyContent="center">
                    <CharacterName />
                </Grid>
                <Grid xs={12}>
                    <DiceResult />
                </Grid>
                <Grid xs={12}>
                    <CharacterOverview />
                </Grid>
                <Grid xs={3}>
                    <Attribute attribute="Dexterity" dice="dexterity_dice" bonus="dexterity_bonus" skills="dexterity_skills"/>
                </Grid>
                <Grid xs={3}>
                    <Attribute attribute="Perception" dice="perception_dice" bonus="perception_bonus" skills="perception_skills"/>
                </Grid>
                <Grid xs={3}>
                    <OtherStats />
                </Grid>
                <Grid xs={3}>
                    <TextComponent property="equipment" label="Equipment"/>
                </Grid>
                <Grid xs={3}>
                    <Attribute attribute="Knowledge" dice="knowledge_dice" bonus="knowledge_bonus" skills="knowledge_skills"/>
                </Grid>
                <Grid xs={3}>
                    <Attribute attribute="Strength" dice="strength_dice" bonus="strength_bonus" skills="strength_skills"/>
                </Grid>
                <Grid xs={3}>
                    <TextComponent property="special_abilities" label="Special Abilities"/>
                </Grid>
                <Grid xs={3}>
                    <Button variant="contained" onClick={()=>history.push(`/notes/${id}`)}>Notes</Button>
                </Grid>
                <Grid xs={3}>
                    <Attribute attribute="Mechanical" dice="mechanical_dice" bonus="mechanical_bonus" skills="mechanical_skills"/>
                </Grid>
                <Grid xs={3}>
                    <Attribute attribute="Technical" dice="technical_dice" bonus="technical_bonus" skills="technical_skills"/>
                </Grid>
                <Grid xs={3}>
                    <WoundedStatus />
                </Grid>
                <Grid xs={3}>
                    <Button sx={{mt: '7.5rem'}} variant="outlined"type="button" onClick={handleOpen}>Delete Character</Button>
                </Grid>
            </Grid>
        </>
        : <p>No character data</p>}
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Delete character?</DialogTitle>
            <DialogContent>
                <DialogContentText>This cannot be undone.</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleDelete}>Delete Character</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </>;
}

export default CharacterDisplayPage;