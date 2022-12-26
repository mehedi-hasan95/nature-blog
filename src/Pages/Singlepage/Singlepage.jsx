import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Sidebar from "../Home/Sidebar/Sidebar";

const Singlepage = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-6 md:gap-12 lg:gap-20 pt-6 rounded-md shadow-sm relative">
                <div className="grid gird-cols-1 gap-10 col-span-full md:col-span-3">
                    <img
                        src="https://images.unsplash.com/photo-1611918126831-0a8352d6196f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        className="w-full"
                        alt=""
                    />
                    <div>
                        <div className="items-center">
                            <h2 className="text-center font-lora font-semibold text-2xl">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                                <div className="flex gap-5 lg:float-right">
                                    <FaEdit className="cursor-pointer text-green-700" />
                                    <MdDelete className="cursor-pointer text-red-800" />
                                </div>
                            </h2>
                        </div>
                        <div className="flex justify-between pt-5">
                            <h2 className="text-xl">
                                Author:{" "}
                                <span className="font-bold">Mehedi</span>
                            </h2>
                            <p>1 hour ago</p>
                        </div>
                        <p className="pt-10 first-letter:text-3xl first-letter:font-extrabold first-letter:pl-5 leading-7 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum atque sit hic est laborum voluptatum?
                            Sint dolor est cum modi voluptatum eius repellendus
                            magnam, maiores, numquam accusamus placeat voluptate
                            provident porro voluptatem asperiores odio?
                            Veritatis delectus aperiam iure ad rerum excepturi
                            magni fugiat maxime nulla. Architecto ducimus
                            commodi asperiores quasi porro veniam aspernatur, ut
                            odio quod reiciendis modi nesciunt pariatur
                            consequuntur. Similique quisquam odio enim veritatis
                            repellat vero quia magni voluptas esse debitis
                            quasi, quidem aperiam vitae? Debitis itaque eaque
                            esse expedita animi iste ullam deserunt, modi dicta!
                            Nihil inventore ut aspernatur ea ad! Molestias
                            voluptas illo quod vitae rerum unde provident
                            expedita id amet eum ab quidem quae, accusamus enim.
                            Perferendis fuga nisi quasi, asperiores eaque nam
                            pariatur sunt numquam odit, iste mollitia possimus
                            minus repudiandae nobis dolorem dignissimos
                            recusandae voluptate neque vero animi maiores.
                            Aperiam, blanditiis culpa accusantium voluptatibus
                            fugit nostrum provident, doloremque non, obcaecati
                            iure veniam ea omnis atque odit adipisci natus. Ipsa
                            est laudantium error quisquam iste cupiditate
                            aspernatur temporibus deleniti eum corporis, modi
                            beatae soluta. In architecto quidem labore iste, eum
                            quis quae maxime obcaecati suscipit voluptas facere
                            sunt veniam consequuntur veritatis, alias sit vitae
                            libero, doloremque voluptate ab fugit mollitia
                            voluptatum deserunt sequi. Laudantium, porro
                            voluptatibus sit amet sapiente voluptates cum culpa
                            aliquid obcaecati? Fuga odit cum saepe animi quae
                            nobis? Aspernatur ipsam, ratione asperiores,
                            temporibus laboriosam ipsa, dolor cum quidem
                            cupiditate fugit amet sit veniam dignissimos
                            obcaecati consectetur. Officia debitis, voluptate
                            doloribus at autem qui quae necessitatibus
                            consectetur sit voluptatem perspiciatis veniam
                            assumenda tempore sed quisquam inventore temporibus
                            neque a? Maxime ad neque quod! Minima repellat fuga
                            quibusdam ipsa quis nihil beatae dolorem ex aliquam
                            cumque. Veniam, et sit voluptatibus velit illo
                            cupiditate architecto, corrupti dolores tenetur
                            possimus reprehenderit dicta. Delectus nulla et
                            dolor animi quibusdam, minus a sequi quos, earum
                            neque aperiam.
                        </p>
                    </div>
                </div>
                <div className="space-y-2 col-span-full md:col-span-1">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Singlepage;
