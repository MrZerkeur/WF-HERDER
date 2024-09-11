import React, { useRef,useLayoutEffect } from 'react'
import { useGLTF,useScroll } from '@react-three/drei'
import {useFrame } from '@react-three/fiber'
import { Quaternion, Vector3  } from 'three';
import { useEffect } from 'react';
import * as THREE from 'three'; 
import gsap from 'gsap'

export function Phone(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('./models/sidiali.glb');
  useEffect(() => {
    if (groupRef.current) {
      const box = new THREE.Box3().setFromObject(groupRef.current);

      const center = new THREE.Vector3();
      box.getCenter(center);
      groupRef.current.position.sub(center);
    }
  }, []);

  // const phone = useRef();
  // const scroll = useScroll();
  // const tl = useRef();
  
  
  // useFrame((state, delta)=>{
  //   tl.current.seek(scroll.offset * tl.current.duration())
  // });


  // useLayoutEffect(()=> {
  //   tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})

  //   tl.current
  //   .to(phone.current.rotation, {y: 0}, 2)
 
  //   .to(phone.current.position, {x: 0}, 20)   

  // },[])
  

  return (
    <group {...props} ref={groupRef} dispose={null} >
      <group position={[-0.006, -0.236, -0.012]} rotation={[0, 0, 150]} scale={0.031}>
        <group>
        <mesh geometry={nodes.UCttAeyROPsgmix.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.rrqFqyfckTuyRuI.geometry} material={materials.CSNzlRnZuvCyxNL} />
        <mesh geometry={nodes.XbtrdVaOWYmkEiU.geometry} material={materials.YiceMpFVTpnmoaq} />
        <mesh geometry={nodes.YbXWdqEcjbfTKuN_0.geometry} material={materials.GFNYbWjyDVGUwJd} />
        <mesh geometry={nodes.AbxQOpRbGREHXRG.geometry} material={materials.IDdMwJVCyuFpUnA} />
        <mesh geometry={nodes.alSOKOYgFKIcUtR.geometry} material={materials.sWxYOtHGWTcXRMx} />
        <mesh geometry={nodes.FjhETOCBEeiBmch.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.lxsKwuOPNvmzBKg_0.geometry} material={materials.KhJiSWFcsscOusf} />
        <mesh geometry={nodes.tWfjYtMZCfucxRt.geometry} material={materials.fdfRsQCrfvPBPfQ} />
        <mesh geometry={nodes.aYjPeBrpBRopJbp.geometry} material={materials.xHgtbqndQshkTKG} />
        <mesh geometry={nodes.BeQtuLXtpSTrzAH.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.KUDomTaVduCyevu.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.QaGkMzxNzKPcqRy.geometry} material={materials.iEhZxWeNLTDdgxm} />
        <mesh geometry={nodes.QOfJIBEXOvXfSUh.geometry} material={materials.vsSJQngPxBJTVZb} />
        <mesh geometry={nodes.RUMRNTkptJGDMpy.geometry} material={materials.LJBezuBxKRoHnAp} />
        <mesh geometry={nodes.BDLCJBydsNjizog_0.geometry} material={materials.fGwijctGaiRaYJC} />
        <mesh geometry={nodes.GWEiavWnRxbogtw_0.geometry} material={materials.FsunUcGyajFpQmW} />
        <mesh geometry={nodes.JUTNJcWwqyxbGDZ_0.geometry} material={materials.LJBezuBxKRoHnAp} />
        <mesh geometry={nodes.PLFTnNQeqVAxicS.geometry} material={materials.BLpVAsLWNICZYGG} />
        <mesh geometry={nodes.RFqaqXLpuCDBIGV_0.geometry} material={materials.nJRBoEsOhzMSqCz} />
        <mesh geometry={nodes.tWBbDznHihIxXam.geometry} material={materials.OStzgRHtVBLWwiD} />
        <mesh geometry={nodes.aVmapfDgqkPkjUf.geometry} material={materials.WqbAhnIPgrrhfXS} />
        <mesh geometry={nodes.lgnGJJmNebyRbHq_0.geometry} material={materials.rNCplyWedyfORFh} />
        <mesh geometry={nodes.qsTxqfACkdoWeLQ.geometry} material={materials.IBtgGxCVyZhjKZM} />
        <mesh geometry={nodes.tQCDizUpBYNcvFA.geometry} material={materials.LtesZnUOMbBEAoi} />
        <mesh geometry={nodes.zPPSOvNamLQVyvv.geometry} material={materials.qEGySvwsouNnVcn} />
        <mesh geometry={nodes.MoTJNOoMxqdxNvQ.geometry} material={materials.IBtgGxCVyZhjKZM} />
        <mesh geometry={nodes.mZxrNiCtMrMjOMv.geometry} material={materials.WqbAhnIPgrrhfXS} />
        <mesh geometry={nodes.YPGjoywokSeoQFr.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.rqSonbcVVSPWFfa_0.geometry} material={materials.jFPFAvCbiqflbQV} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/sidiali.glb')
