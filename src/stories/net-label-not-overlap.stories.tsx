import React from "react";
import { soupToSvg } from "../utils/soup-to-svg.js";

export const NetLabelNotOverlap = () => {
  const soup = [
    {
        type: "source_component",
        source_component_id: "simple_resistor_0",
        name: "R1",
        supplier_part_numbers: {},
        ftype: "simple_resistor",
        resistance: 100,
        source: {
            type: "source_component",
            source_component_id: "simple_resistor_0",
            name: "R1",
            supplier_part_numbers: {},
            ftype: "simple_resistor",
            resistance: 100,
        },
    },
    {
        type: "schematic_component",
        source_component_id: "simple_resistor_0",
        schematic_component_id: "schematic_component_simple_resistor_0",
        rotation: 0,
        size: {
            width: 1,
            height: 0.3,
        },
        center: {
            x: -1,
            y: 0,
        },
        source: {
            type: "source_component",
            source_component_id: "simple_resistor_0",
            name: "R1",
            supplier_part_numbers: {},
            ftype: "simple_resistor",
            resistance: 100,
        },
    },
    {
        type: "source_port",
        name: "left",
        source_port_id: "source_port_0",
        source_component_id: "simple_resistor_0",
        source: {
            type: "source_component",
            source_component_id: "simple_resistor_0",
            name: "R1",
            supplier_part_numbers: {},
            ftype: "simple_resistor",
            resistance: 100,
        },
    },
    {
        type: "schematic_port",
        schematic_port_id: "schematic_port_0",
        source_port_id: "source_port_0",
        center: {
            x: -1.5,
            y: 0,
        },
        facing_direction: "left",
        schematic_component_id: "schematic_component_simple_resistor_0",
        source: {
            type: "source_port",
            name: "left",
            source_port_id: "source_port_0",
            source_component_id: "simple_resistor_0",
        },
    },
    {
        type: "source_port",
        name: "right",
        source_port_id: "source_port_1",
        source_component_id: "simple_resistor_0",
        source: {
            type: "source_component",
            source_component_id: "simple_resistor_0",
            name: "R1",
            supplier_part_numbers: {},
            ftype: "simple_resistor",
            resistance: 100,
        },
    },
    {
        type: "schematic_port",
        schematic_port_id: "schematic_port_1",
        source_port_id: "source_port_1",
        center: {
            x: -0.5,
            y: 0,
        },
        facing_direction: "right",
        schematic_component_id: "schematic_component_simple_resistor_0",
        source: {
            type: "source_port",
            name: "right",
            source_port_id: "source_port_1",
            source_component_id: "simple_resistor_0",
        },
    },
    {
        type: "schematic_text",
        text: "R1",
        schematic_text_id: "schematic_text_0",
        schematic_component_id: "schematic_component_simple_resistor_0",
        anchor: "left",
        position: {
            x: -1.2,
            y: -0.5,
        },
        rotation: 0,
        source: null,
    },
    {
        type: "schematic_text",
        text: 100,
        schematic_text_id: "schematic_text_1",
        schematic_component_id: "schematic_component_simple_resistor_0",
        anchor: "left",
        position: {
            x: -1.2,
            y: -0.3,
        },
        rotation: 0,
        source: null,
    },
    {
        type: "source_component",
        source_component_id: "simple_resistor_1",
        name: "R2",
        supplier_part_numbers: {},
        ftype: "simple_resistor",
        resistance: 100,
        source: {
            type: "source_component",
            source_component_id: "simple_resistor_1",
            name: "R2",
            supplier_part_numbers: {},
            ftype: "simple_resistor",
            resistance: 100,
        },
    },
    {
        type: "schematic_component",
        source_component_id: "simple_resistor_1",
        schematic_component_id: "schematic_component_simple_resistor_1",
        rotation: 1.5707963267948966,
        size: {
            width: 1,
            height: 0.3,
        },
        center: {
            x: 0,
            y: 2,
        },
        source: {
            type: "source_component",
            source_component_id: "simple_resistor_1",
            name: "R2",
            supplier_part_numbers: {},
            ftype: "simple_resistor",
            resistance: 100,
        },
    },
    {
        type: "source_port",
        name: "left",
        source_port_id: "source_port_2",
        source_component_id: "simple_resistor_1",
        source: {
            type: "source_component",
            source_component_id: "simple_resistor_1",
            name: "R2",
            supplier_part_numbers: {},
            ftype: "simple_resistor",
            resistance: 100,
        },
    },
    {
        type: "schematic_port",
        schematic_port_id: "schematic_port_2",
        source_port_id: "source_port_2",
        center: {
            x: -3.061616997868383e-17,
            y: 1.5,
        },
        facing_direction: "down",
        schematic_component_id: "schematic_component_simple_resistor_1",
        source: {
            type: "source_port",
            name: "left",
            source_port_id: "source_port_2",
            source_component_id: "simple_resistor_1",
        },
    },
    {
        type: "source_port",
        name: "right",
        source_port_id: "source_port_3",
        source_component_id: "simple_resistor_1",
        source: {
            type: "source_component",
            source_component_id: "simple_resistor_1",
            name: "R2",
            supplier_part_numbers: {},
            ftype: "simple_resistor",
            resistance: 100,
        },
    },
    {
        type: "schematic_port",
        schematic_port_id: "schematic_port_3",
        source_port_id: "source_port_3",
        center: {
            x: 3.061616997868383e-17,
            y: 2.5,
        },
        facing_direction: "up",
        schematic_component_id: "schematic_component_simple_resistor_1",
        source: {
            type: "source_port",
            name: "right",
            source_port_id: "source_port_3",
            source_component_id: "simple_resistor_1",
        },
    },
    {
        type: "schematic_text",
        text: "R2",
        schematic_text_id: "schematic_text_2",
        schematic_component_id: "schematic_component_simple_resistor_1",
        anchor: "left",
        position: {
            x: 0.3,
            y: 1.8,
        },
        rotation: 0,
        source: null,
    },
    {
        type: "schematic_text",
        text: 100,
        schematic_text_id: "schematic_text_3",
        schematic_component_id: "schematic_component_simple_resistor_1",
        anchor: "left",
        position: {
            x: 0.3,
            y: 2,
        },
        rotation: 0,
        source: null,
    },
    {
        type: "source_component",
        source_component_id: "simple_resistor_2",
        name: "R3",
        supplier_part_numbers: {},
        ftype: "simple_resistor",
        resistance: 100,
        source: {
            type: "source_component",
            source_component_id: "simple_resistor_2",
            name: "R3",
            supplier_part_numbers: {},
            ftype: "simple_resistor",
            resistance: 100,
        },
    },
    {
        type: "schematic_component",
        source_component_id: "simple_resistor_2",
        schematic_component_id: "schematic_component_simple_resistor_2",
        rotation: -1.5707963267948966,
        size: {
            width: 1,
            height: 0.3,
        },
        center: {
            x: 0,
            y: -2,
        },
        source: {
            type: "source_component",
            source_component_id: "simple_resistor_2",
            name: "R3",
            supplier_part_numbers: {},
            ftype: "simple_resistor",
            resistance: 100,
        },
    },
    {
        type: "source_port",
        name: "left",
        source_port_id: "source_port_4",
        source_component_id: "simple_resistor_2",
        source: {
            type: "source_component",
            source_component_id: "simple_resistor_2",
            name: "R3",
            supplier_part_numbers: {},
            ftype: "simple_resistor",
            resistance: 100,
        },
    },
    {
        type: "schematic_port",
        schematic_port_id: "schematic_port_4",
        source_port_id: "source_port_4",
        center: {
            x: -3.061616997868383e-17,
            y: -1.5,
        },
        facing_direction: "up",
        schematic_component_id: "schematic_component_simple_resistor_2",
        source: {
            type: "source_port",
            name: "left",
            source_port_id: "source_port_4",
            source_component_id: "simple_resistor_2",
        },
    },
    {
        type: "source_port",
        name: "right",
        source_port_id: "source_port_5",
        source_component_id: "simple_resistor_2",
        source: {
            type: "source_component",
            source_component_id: "simple_resistor_2",
            name: "R3",
            supplier_part_numbers: {},
            ftype: "simple_resistor",
            resistance: 100,
        },
    },
    {
        type: "schematic_port",
        schematic_port_id: "schematic_port_5",
        source_port_id: "source_port_5",
        center: {
            x: 3.061616997868383e-17,
            y: -2.5,
        },
        facing_direction: "down",
        schematic_component_id: "schematic_component_simple_resistor_2",
        source: {
            type: "source_port",
            name: "right",
            source_port_id: "source_port_5",
            source_component_id: "simple_resistor_2",
        },
    },
    {
        type: "schematic_text",
        text: "R3",
        schematic_text_id: "schematic_text_4",
        schematic_component_id: "schematic_component_simple_resistor_2",
        anchor: "left",
        position: {
            x: -0.3,
            y: -1.8,
        },
        rotation: 0,
        source: null,
    },
    {
        type: "schematic_text",
        text: 100,
        schematic_text_id: "schematic_text_5",
        schematic_component_id: "schematic_component_simple_resistor_2",
        anchor: "left",
        position: {
            x: -0.3,
            y: -2,
        },
        rotation: 0,
        source: null,
    },
    {
        type: "source_net",
        member_source_group_ids: [],
        source_net_id: "net_0",
        name: "LONGLONG",
        source: null,
    },
    {
        type: "source_trace",
        connected_source_port_ids: ["source_port_1"],
        connected_source_net_ids: ["net_0"],
        source_trace_id: "source_trace_0",
        source: null,
    },
    {
        type: "schematic_net_label",
        source_net_id: "net_0",
        text: "LONGLONG",
        anchor_side: "left",
        center: {
            x: 0.30000000000000004,
            y: 0,
        },
        source: null,
    },
    {
        type: "schematic_trace",
        schematic_trace_id: "schematic_trace_0",
        source_trace_id: "source_trace_0",
        edges: [
            {
                from: {
                    x: -0.5,
                    y: 0,
                },
                to: {
                    x: -0.32,
                    y: 0,
                },
                from_schematic_port_id: "schematic_port_1",
            },
        ],
        source: null,
    },
    {
        type: "source_trace",
        source_trace_id: "source_trace_1",
        connected_source_port_ids: ["source_port_2", "source_port_4"],
        source: null,
    },
    {
        type: "schematic_trace",
        source_trace_id: "source_trace_1",
        schematic_trace_id: "schematic_trace_1",
        edges: [
            {
                from: {
                    x: 0,
                    y: 1.4,
                },
                to: {
                    x: 0,
                    y: 0.19999999999999973,
                },
            },
            {
                from: {
                    x: 0,
                    y: 0.19999999999999973,
                },
                to: {
                    x: 0.9000000000000001,
                    y: 0.19999999999999973,
                },
            },
            {
                from: {
                    x: 0.9000000000000001,
                    y: 0.19999999999999973,
                },
                to: {
                    x: 0.9000000000000001,
                    y: -1.3000000000000003,
                },
            },
            {
                from: {
                    x: 0.9000000000000001,
                    y: -1.3000000000000003,
                },
                to: {
                    x: 0,
                    y: -1.3000000000000003,
                },
            },
            {
                from: {
                    x: -3.061616997868383e-17,
                    y: 1.5,
                    ti: 0,
                },
                to: {
                    x: 0,
                    y: 1.4,
                },
            },
            {
                from: {
                    x: -3.061616997868383e-17,
                    y: -1.5,
                    ti: 1,
                },
                to: {
                    x: 0,
                    y: -1.3000000000000003,
                },
            },
        ],
        source: null,
    },
  ];
  const svg = soupToSvg(soup);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default {
    title: 'Net Label Not Overlap',
    component: NetLabelNotOverlap,
}