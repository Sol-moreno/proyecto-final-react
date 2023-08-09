import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function MenuDesplegable() {
  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="success">Categorias</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="/productos/figuras anime">Figuras de Anime</Dropdown.Item>
        <Dropdown.Item href= "/productos/macetas">Macetas</Dropdown.Item>
        <Dropdown.Item href= "/productos/varios">Varios</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MenuDesplegable









