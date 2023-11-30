// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: proto/Enum/MessageType.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Lumber.Enum {

  /// <summary>Holder for reflection information generated from proto/Enum/MessageType.proto</summary>
  public static partial class MessageTypeReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/Enum/MessageType.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static MessageTypeReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Chxwcm90by9FbnVtL01lc3NhZ2VUeXBlLnByb3RvEgtsdW1iZXIuRW51bSqF",
            "AQoMRU1lc3NhZ2VUeXBlEg8KC0dldFVzZXJJbmZvEAASEAoMVHJlZVdhdGVy",
            "aW5nEAESDwoLVHJlZVVwZ3JhZGUQAhIOCgpBeGVCdXJuaXNoEAMSDgoKQXhl",
            "VXBncmFkZRAEEgwKCERvTHVtYmVyEAUSEwoPR2V0UmV3YXJkUmVjb3JkEAZi",
            "BnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(new[] {typeof(global::Lumber.Enum.EMessageType), }, null, null));
    }
    #endregion

  }
  #region Enums
  /// <summary>
  /// 消息类型(通信消息枚举)
  /// </summary>
  public enum EMessageType {
    /// <summary>
    /// 获取用户信息
    /// </summary>
    [pbr::OriginalName("GetUserInfo")] GetUserInfo = 0,
    /// <summary>
    /// 树浇灌
    /// </summary>
    [pbr::OriginalName("TreeWatering")] TreeWatering = 1,
    /// <summary>
    /// 树升级
    /// </summary>
    [pbr::OriginalName("TreeUpgrade")] TreeUpgrade = 2,
    /// <summary>
    /// 斧子打磨
    /// </summary>
    [pbr::OriginalName("AxeBurnish")] AxeBurnish = 3,
    /// <summary>
    /// 斧子升级
    /// </summary>
    [pbr::OriginalName("AxeUpgrade")] AxeUpgrade = 4,
    /// <summary>
    ///砍树
    /// </summary>
    [pbr::OriginalName("DoLumber")] DoLumber = 5,
    /// <summary>
    /// 砍树获奖历史记录
    /// </summary>
    [pbr::OriginalName("GetRewardRecord")] GetRewardRecord = 6,
  }

  #endregion

}

#endregion Designer generated code
