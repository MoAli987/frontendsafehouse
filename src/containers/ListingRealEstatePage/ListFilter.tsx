import React, { FC, useEffect } from "react";
import SectionGridFilterCard from "./SectionGridFilterCard";
import { Helmet } from "react-helmet";
import SectionHero2ArchivePage from "components/SectionHero2ArchivePage/SectionHero2ArchivePage";
import { useParams } from "react-router-dom";
export interface ListingRealEstatePageProps {
    className?: string;
}

const ListFilter: FC<ListingRealEstatePageProps> = ({
    className = "",
}) => {
    const params = useParams();
    useEffect(() => {
        // alert(params.price)
        const $body = document.querySelector("body");
        if ($body) {
            $body.className = "theme-cyan-blueGrey";
        }
        return () => {
            if ($body) {
                $body.className = "";
            }
        };
    }, []);

    return (
        <div
            className={`nc-ListingRealEstatePage relative overflow-hidden ${className}`}
            data-nc-id="ListingRealEstatePage"
        >
            <Helmet>
                <title>Property</title>
            </Helmet>

            <div className="container relative">
                {/* SECTION HERO */}
                <SectionHero2ArchivePage className="" />

                {/* SECTION */}
                <SectionGridFilterCard className="py-24 lg:py-28"
                    urlApi={`http://localhost:3000/api/property/getAllPropertiesFilter?${params.location != "-" ? `propertyCity=${params.location}` : ""}
                ${params.price != "-" ? `&propertyPrice=${params.price}` : ""}
                ${params.status != "-" ? `&propertyStatus=${params.status}` : ""}
                ${params.typefor != "-" ? `&typefor=${params.typefor}` : ""}`} />

            </div>
        </div>
    );
};

export default ListFilter;
