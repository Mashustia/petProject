import { FC } from 'react'
import {Col, Row} from 'react-bootstrap';

import {ITableItemProps as IProps} from './types';
import {IMaterial} from '../../../../charactersData/types';

import './TableItem.css'

const TableItem: FC<IProps> = ({data: [lvl, materials]}) => {
  console.log(lvl, materials)
  const rows = () => materials?.map(({material, count}: IMaterial, index: number) => {
    const imagePath = `/images/ascensionMaterials/${material}.png`

    return (
      <Col key={index} xs={3}>
        <img src={imagePath} alt={material} className='ascension-material-img'/>
        <p className='mb-0 fw-bold'>{count}</p>
      </Col>
    )
  })

  return (
    <Row className='align-items-center gx-1 gy-2 table-border mb-3'>
      <Col xs={1} className='fw-bold'>{lvl}</Col>
      <Col xs={11}>
        <Row className='align-items-center gx-1'>{rows()}</Row>
      </Col>
    </Row>
  )
}

export default TableItem
