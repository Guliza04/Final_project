import React from 'react';
import CatalogPost from './CatalogPost';
import classes from './styles/catalog.module.css'
import IndoorInner from '../indoorInner/IndoorInner';
import Line from '../../../components/line/Line';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPageAction } from '../../../redux/actions/catalogActions';
import LoadPage from '../../../components/loadPage/LoadPage';

const IndoorPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPageAction(id))
    },[id])

    const {page}=useSelector(state=>state.catalogReducer)
    const {preload} =useSelector(state=>state.compReducer)

    return (
        <div style={{backgroundColor:"#F6F0F0", padding:"50px 0 50px"}}> 
            <h1 className={classes.nameOfCards}>{page[0]?.categories[0]?.title}</h1>
            {preload?<LoadPage/>:  <div className={classes.background} style={{marginBottom:'50px'}}>
               
               {page && page?.map((item) =>
                <Link  key={item?.id} to={`/Indoor/${item?.id}`}>
                   <CatalogPost 
                       post={{image : item?.photos[0],
                       name : item?.title , 
                       cost: item?.price ,
                       size:item?.description ,
                       color:item?.colors}}/>
                   </Link>
               )}
           </div>
           }
          
            <Line/>
            <IndoorInner/>
        </div>
    );
}

export default IndoorPage;
