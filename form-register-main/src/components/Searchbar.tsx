import React from "react";
import { Icon } from '@iconify/react';
import styled from 'styled-components';




export function SearchBar() {
    const [valorDaBusca, setValorDaBusca] = React.useState();
    return (
    <>
     <Search>
      <input type="text" placeholder="Pesquise" onChange={(event) => {
       setValorDaBusca(event.target.value);
      }} />
      <button><Icon icon="simple-line-icons:magnifier" /></button>
     </Search>
    </>
    )
   }