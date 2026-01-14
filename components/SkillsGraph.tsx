import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { SkillGraphData, SkillNode, SkillLink } from '../types';

interface Props {
  data: SkillGraphData;
}

const SkillsGraph: React.FC<Props> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !wrapperRef.current) return;

    // Clear previous render
    d3.select(svgRef.current).selectAll("*").remove();

    const width = wrapperRef.current.clientWidth;
    const height = wrapperRef.current.clientHeight;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [0, 0, width, height]);

    // Color scale based on group
    const color = (group: number) => {
        const colors = ['#06b6d4', '#8b5cf6', '#10b981', '#f59e0b']; // Cyan, Purple, Green, Amber
        return colors[group - 1] || '#94a3b8';
    };

    // Simulation setup
    const simulation = d3.forceSimulation(data.nodes as d3.SimulationNodeDatum[])
      .force("link", d3.forceLink(data.links).id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius((d: any) => d.val * 2.5));

    // Links
    const link = svg.append("g")
      .attr("stroke", "#334155")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value));

    // Node Group
    const nodeGroup = svg.append("g")
      .selectAll("g")
      .data(data.nodes)
      .join("g")
      .call(d3.drag<any, any>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    // Node Circles
    nodeGroup.append("circle")
      .attr("r", (d) => d.val * 1.5)
      .attr("fill", (d) => color(d.group))
      .attr("fill-opacity", 0.2)
      .attr("stroke", (d) => color(d.group))
      .attr("stroke-width", 2)
      .classed("cursor-pointer transition-all duration-300", true);

    // Node Text
    nodeGroup.append("text")
      .text((d) => d.id)
      .attr("x", (d) => d.val * 1.8)
      .attr("y", 5)
      .attr("fill", "#e2e8f0")
      .attr("font-size", "12px")
      .attr("font-family", "monospace")
      .style("pointer-events", "none")
      .style("text-shadow", "0 0 5px #000");

    // Simulation Tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      nodeGroup
        .attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    // Drag functions
    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, [data]);

  return (
    <div ref={wrapperRef} className="w-full h-full min-h-[400px] bg-slate-900/20 backdrop-blur-sm rounded-xl border border-white/5 relative overflow-hidden">
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <h3 className="text-neon-cyan font-mono text-sm tracking-widest uppercase">Neural Skill Matrix</h3>
        <p className="text-slate-500 text-xs">Force-Directed Interaction</p>
      </div>
      <svg ref={svgRef} className="w-full h-full"></svg>
    </div>
  );
};

export default SkillsGraph;