/* eslint-disable react/jsx-props-no-spreading */
import Grid from '@mui/material/Grid';
import EmptyState from 'components/Common/EmptyState';
import PageHeader from 'components/Common/PageHeader';
import Spinner from 'components/Common/Spinner';
import { allItems } from 'utils/NavTree';


type Props = {
    headerItem: typeof allItems[keyof typeof allItems];
    list: Array<unknown>;
    isLoading: boolean
};

export default function ListPage(props: Props) {
  return (
    <>
      <PageHeader
        createLink={props.headerItem.createLink}
        Icon={props.headerItem.Icon}
        title={props.headerItem.name}
      />
      <Grid container spacing={2}>
        <RenderList {...props} />
      </Grid>
    </>
  );
}

function RenderList(props: Omit<Props, 'headerItem'>) {
  if (!props.list) { return null; }
  else if (!Array.isArray(props.list) && props.isLoading) { return <Spinner />; }
  else if (props.list.length === 0) { return <EmptyState />; }
  else {
    return (
      <>
        {props.list.map((item) => (
          <Grid item xs={12} key={String(item)}>
            {String(item)}
          </Grid>
        ))}
      </>
    );
  }
}
