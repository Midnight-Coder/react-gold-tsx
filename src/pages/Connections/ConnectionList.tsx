import ListPage from 'components/Common/ListPage';
import { allItems } from 'utils/NavTree';


export default function ConnectionList() {
  return (
    <ListPage headerItem={allItems.connectionsList} list={[]} isLoading={false} />
  );
}
