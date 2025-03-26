import { useDispatch, useSelector } from "react-redux"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>

      {/* <Typography>Eu duis qui exercitation cillum irure exercitation enim proident magna. Tempor pariatur qui dolor qui anim ut nisi deserunt minim. Laborum ea veniam ut ullamco eu culpa. Dolor et magna sit proident ullamco in anim incididunt minim duis exercitation. Esse cupidatat cupidatat in elit dolore ipsum.</Typography> */}

      {
        (!!active) 
        ? <NoteView />
        : <NothingSelectedView />
      }
      
      <IconButton
        onClick={onClickNewNote}
        size="large"
        disabled={isSaving}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>

      </IconButton>
    </JournalLayout>
  )
}
