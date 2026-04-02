import Card from '../common/Card'

function EventsProjectsSection() {
    return(
        <div style={{ padding: "0 100px" }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "2rem" }}>Events and Projects</p>
            <div style={{ display: "flex", gap: "40px" }}>
                <Card images={[
                    "/images/blank.png",
                    "/images/blank.png",
                    "/images/blank.png",
                ]} text="Lorem ipsum dolor sit amet consectetur. Placerat a quam malesuada curabitur. Pharetra nisl nisl commodo venenatis aenean leo euismod. Consequat ipsum ullamcorper in egestas id sagittis. Scelerisque dui nibh mauris bibendum in." />
                <Card images={[
                    "/images/blank.png",
                    "/images/blank.png",
                    "/images/blank.png",
                ]} text="Lorem ipsum dolor sit amet consectetur. Placerat a quam malesuada curabitur. Pharetra nisl nisl commodo venenatis aenean leo euismod. Consequat ipsum ullamcorper in egestas id sagittis. Scelerisque dui nibh mauris bibendum in." />
            </div>
        </div>
    )
}
export default EventsProjectsSection
