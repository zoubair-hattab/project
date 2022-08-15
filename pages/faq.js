import React from "react";
import Title from "@/components/title";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
const Faq = () => {
  return (
    <>
      <Title pageName={"FAQ"} />
      <Navbar />
      <div className="container py-3">
        <div className="my-3">
          <p className="text-bodoni lh-2">
            Lorem ipsum dolor sit amet. Ut laudantium placeat vel praesentium
            tempora ea iure voluptatem qui voluptates consequuntur. Est maiores
            odio et omnis porro sed dolor ullam ex maiores rerum cum odit
            praesentium et unde dolorum. Qui consequatur amet ut aliquam
            expedita in consequatur dolor qui impedit mollitia eum cumque quos
            et atque voluptatem qui sapiente illo.
          </p>
          <p className="text-bodoni lh-2">
            A tenetur aliquam quo quia eligendi nam enim libero ex galisum
            dolorem et architecto labore quo repellendus dolorem. Qui sequi
            laboriosam est quos inventore ea molestias delectus. Ut reiciendis
            iusto aut iusto fugiat ad esse natus ut sapiente voluptatem sed
            omnis dolore eum earum quia. Et consequatur numquam et totam maxime
            quia maxime ea veniam iure et expedita iste et accusamus quasi
            voluptas praesentium.
          </p>
          <p className="text-bodoni lh-2">
            Ea nisi quam ut corrupti tempora qui natus dolorum vel atque
            similique sed aperiam explicabo ut quia perspiciatis. Vel sint autem
            aut autem omnis sit odio modi qui alias saepe At ducimus cupiditate.
            Sed iure cumque sit veritatis debitis id sint sint. In similique
            esse ad eveniet dicta ea de
          </p>
        </div>
        <div className="my-3">
          <p className="text-bodoni lh-2">
            Lorem ipsum dolor sit amet. Ut laudantium placeat vel praesentium
            tempora ea iure voluptatem qui voluptates consequuntur. Est maiores
            odio et omnis porro sed dolor ullam ex maiores rerum cum odit
            praesentium et unde dolorum. Qui consequatur amet ut aliquam
            expedita in consequatur dolor qui impedit mollitia eum cumque quos
            et atque voluptatem qui sapiente illo.
          </p>
          <p className="text-bodoni lh-2">
            A tenetur aliquam quo quia eligendi nam enim libero ex galisum
            dolorem et architecto labore quo repellendus dolorem. Qui sequi
            laboriosam est quos inventore ea molestias delectus. Ut reiciendis
            iusto aut iusto fugiat ad esse natus ut sapiente voluptatem sed
            omnis dolore eum earum quia. Et consequatur numquam et totam maxime
            quia maxime ea veniam iure et expedita iste et accusamus quasi
            voluptas praesentium.
          </p>
          <p className="text-bodoni lh-2">
            Ea nisi quam ut corrupti tempora qui natus dolorum vel atque
            similique sed aperiam explicabo ut quia perspiciatis. Vel sint autem
            aut autem omnis sit odio modi qui alias saepe At ducimus cupiditate.
            Sed iure cumque sit veritatis debitis id sint sint. In similique
            esse ad eveniet dicta ea de
          </p>
        </div>

        <Image
          src={"/images/chart_placeholder.png"}
          alt="chart or image palceholder"
          width={"500"}
          height={"250"}
          className={""}
          layout="responsive"
        />

        <div className="my-3">
          <p className="text-bodoni lh-2">
            Lorem ipsum dolor sit amet. Ut laudantium placeat vel praesentium
            tempora ea iure voluptatem qui voluptates consequuntur. Est maiores
            odio et omnis porro sed dolor ullam ex maiores rerum cum odit
            praesentium et unde dolorum. Qui consequatur amet ut aliquam
            expedita in consequatur dolor qui impedit mollitia eum cumque quos
            et atque voluptatem qui sapiente illo.
          </p>
          <p className="text-bodoni lh-2">
            A tenetur aliquam quo quia eligendi nam enim libero ex galisum
            dolorem et architecto labore quo repellendus dolorem. Qui sequi
            laboriosam est quos inventore ea molestias delectus. Ut reiciendis
            iusto aut iusto fugiat ad esse natus ut sapiente voluptatem sed
            omnis dolore eum earum quia. Et consequatur numquam et totam maxime
            quia maxime ea veniam iure et expedita iste et accusamus quasi
            voluptas praesentium.
          </p>
          <p className="text-bodoni lh-2">
            Ea nisi quam ut corrupti tempora qui natus dolorum vel atque
            similique sed aperiam explicabo ut quia perspiciatis. Vel sint autem
            aut autem omnis sit odio modi qui alias saepe At ducimus cupiditate.
            Sed iure cumque sit veritatis debitis id sint sint. In similique
            esse ad eveniet dicta ea de
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
