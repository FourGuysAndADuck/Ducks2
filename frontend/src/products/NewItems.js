import React, {useEffect, useRef, useState} from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useThemeHook } from '../Theme/Theme';
import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import ProductCard from '../products/ProductCard';
import {motion} from 'framer-motion';
import images from '../PexelImage';

const NewItems = () =>  {


    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)

    },[])

    const [theme] = useThemeHook();
    const [searchInput, setSearchInput] = useState('');
    const [productData, setProductData] = useState([]);

    async function getResponse() {
        const res = await fetch('http://localhost:8000/Products')
            .then(res=> res.json());
        setProductData(await res);
    }

    useEffect(() => {
        getResponse();
    },[]);

    return (
        <Container className="py-4">
            <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}} >

                <motion.div  drag="x"  dragConstraints={{
                    right: 1500,
                    left: -1500


                }} className="inner-carousel">

                    {images.map(image => {
                        return(

                            <motion.div className="item" key={image}>

                                <img src={image} alt=""/>

                            </motion.div>
                        )
                    })}

                </motion.div>


            </motion.div>
            <Row className="justify-content-center">
                <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
                    <h1 className={theme? 'text-light my-5': 'text-black my-5'}>Search Merch</h1>
                    <InputGroup className="mb-3">
                        <InputGroup.Text className={theme? 'bg-black text-dark-primary': 'bg-light text-light-primary'}>
                            <BiSearch size="2rem" />
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e)=> setSearchInput(e.target.value)}
                            className={theme? 'bg-light-black text-light': 'bg-light text-black'}
                        />
                    </InputGroup>
                </Col>
                <SearchFilter
                    value={searchInput}
                    data={productData}
                    renderResults={results =>(
                        <Row className="justify-content-center">
                            {results.map((item, i)=>(
                                <ProductCard data={item} key={i} />
                            ))}
                        </Row>
                    )}
                />

            </Row>
        </Container>

    )
}
export default NewItems