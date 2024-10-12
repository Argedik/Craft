import React from "react";
import NavBar from "../../components/navBar";
import styles from "./styles.module.scss";
import Link from "next/link";
import Button from "../../components/buttons";
import ProductTitle from "app/components/product/productTitle";
import Footer from "app/components/footer";

type Product = {
    id: string;
    name: string;
    image: string;
    description: string | JSX.Element;
};

const products: Product[] = [
    {
        id: "air-wipes",
        name: "AIR WIPES",
        image: "/Rectangle17.png",
        description: (
            <div>
                <p>
                    Drying wire and cable can be a tricky, expensive business.{" "}
                </p>
                <p>
                    Huestis Industrial Air Wipes use precision controlled air
                    flow to save air, reduce noise and dramatically cut energy
                    consumption.
                </p>
                <p>Here are the basics of how an Air Wipe works: </p>
                <p>
                    Air is channeled through a manifold in the body and
                    distributed to a ring of jets.
                </p>
                <p>
                    Jet orifices restrict air flow to provide efficient drying
                    at the lowest possible air consumption.
                </p>
                <p>
                    Turbulence created by controlling air flow and direction
                    removes water from the material surface.
                </p>
                <p>
                    A Venturi effect is also created within the air wipe,
                    further increasing air flow.
                </p>
                Sizes are recommendations only. Specific applications may
                require less or greater clearance for proper drying.
                <p>Custom openings up to 7' (177.8mm) in diameter.,</p>
            </div>
        ),
    },
    {
        id: "blades",
        name: "BLADES",
        image: "/Rectangle18.png",
        description: (
            <div>
                <p>
                    Silent saw is used in power tools and chipboard cutting
                    machines. It is a product generally used in cutting
                    chipboard materials and wooden beams. It is suitable for
                    cutting materials such as flooring on hard surfaces.
                </p>
                <p>
                    Thanks to its sharp rotating teeth, the material to be cut
                    can be easily cut without applying too much force. The
                    degree of sharpness is quite high. The product is made of
                    first class high quality material.
                </p>
                <p>
                    Since it is produced from quality material, there is no
                    rusting reaction. Since there is no rust, the product can be
                    used with peace of mind for many years. They have different
                    thicknesses.
                </p>
                <p>
                    It is a product that is frequently used and preferred by our
                    furniture and wood producers in their machines. After all of
                    our products are checked in the quality control units in our
                    store, the packaging process is carried out.
                </p>
            </div>
        ),
    },
    {
        id: "stands",
        name: "STANDS",
        image: "/Rectangle19.png",
        description: (
            <div>
                <p>
                    One person can easily load or unload reels manually by
                    rolling them into place over the beveled edge. 
                </p>
                <p>No more waiting for fork lifts, cranes or hoists.</p>
                <p>
                    They are adjusted almost instantly for various reel
                    diameters and widths, and automatically permit floor
                    clearance.
                </p>
                <p>
                    These rugged systems ensure minimal maintenance and
                    trouble-free service.
                </p>
            </div>
        ),
    },
    {
        id: "welders",
        name: "WELDERS",
        image: "/Rectangle20.png",
        description: (
            <div>
                <p>
                    The new line of cold pressure welding machines and dyes is
                    backed by Huestis Industrial's quality and dependability,
                    and the company's warranty.
                </p>
            </div>
        ),
    },
];

type ProductDetailProps = {
    params: {
        productId: string;
    };
};

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
    const { productId } = params;
    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className={styles.container}>
            <NavBar noImage />
            <main className={styles.productDetailPage}>
                <div className={styles.productDetailContainer}>
                    <div className={styles.productImageContainer}>
                        <ProductTitle text={product.name} />
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.productImage}
                        />
                    </div>
                    <div className={styles.productDescription}>
                        <div>{product.description}</div>
                        <Button text="Contact Now" />
                    </div>
                </div>
                <Link href="/product">
                    <div className={styles.goToProductPage}>
                        Go to product page
                    </div>
                </Link>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetail;
