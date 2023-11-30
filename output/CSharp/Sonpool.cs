// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: proto/Spec/Sonpool.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Lumber.Spec {

  /// <summary>Holder for reflection information generated from proto/Spec/Sonpool.proto</summary>
  public static partial class SonpoolReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/Spec/Sonpool.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static SonpoolReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Chhwcm90by9TcGVjL1NvbnBvb2wucHJvdG8SC2x1bWJlci5TcGVjIpgBCgdT",
            "b25wb29sEg8KB1Bvb2xfSUQYASABKAUSEwoLU29ucG9vbDFfSUQYAiABKAUS",
            "EwoLU29ucG9vbDJfSUQYAyABKAUSEwoLU29ucG9vbDNfSUQYBCABKAUSEwoL",
            "U29ucG9vbDRfSUQYBSABKAUSEwoLU29ucG9vbDVfSUQYBiABKAUSEwoLU29u",
            "cG9vbDZfSUQYByABKAViBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Lumber.Spec.Sonpool), global::Lumber.Spec.Sonpool.Parser, new[]{ "PoolID", "Sonpool1ID", "Sonpool2ID", "Sonpool3ID", "Sonpool4ID", "Sonpool5ID", "Sonpool6ID" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  [global::System.Diagnostics.DebuggerDisplayAttribute("{ToString(),nq}")]
  public sealed partial class Sonpool : pb::IMessage<Sonpool>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Sonpool> _parser = new pb::MessageParser<Sonpool>(() => new Sonpool());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<Sonpool> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Lumber.Spec.SonpoolReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Sonpool() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Sonpool(Sonpool other) : this() {
      poolID_ = other.poolID_;
      sonpool1ID_ = other.sonpool1ID_;
      sonpool2ID_ = other.sonpool2ID_;
      sonpool3ID_ = other.sonpool3ID_;
      sonpool4ID_ = other.sonpool4ID_;
      sonpool5ID_ = other.sonpool5ID_;
      sonpool6ID_ = other.sonpool6ID_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Sonpool Clone() {
      return new Sonpool(this);
    }

    /// <summary>Field number for the "Pool_ID" field.</summary>
    public const int PoolIDFieldNumber = 1;
    private int poolID_;
    /// <summary>
    /// 奖励池ID
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int PoolID {
      get { return poolID_; }
      set {
        poolID_ = value;
      }
    }

    /// <summary>Field number for the "Sonpool1_ID" field.</summary>
    public const int Sonpool1IDFieldNumber = 2;
    private int sonpool1ID_;
    /// <summary>
    /// 品质1池ID
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int Sonpool1ID {
      get { return sonpool1ID_; }
      set {
        sonpool1ID_ = value;
      }
    }

    /// <summary>Field number for the "Sonpool2_ID" field.</summary>
    public const int Sonpool2IDFieldNumber = 3;
    private int sonpool2ID_;
    /// <summary>
    /// 品质2池ID
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int Sonpool2ID {
      get { return sonpool2ID_; }
      set {
        sonpool2ID_ = value;
      }
    }

    /// <summary>Field number for the "Sonpool3_ID" field.</summary>
    public const int Sonpool3IDFieldNumber = 4;
    private int sonpool3ID_;
    /// <summary>
    /// 品质3池ID
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int Sonpool3ID {
      get { return sonpool3ID_; }
      set {
        sonpool3ID_ = value;
      }
    }

    /// <summary>Field number for the "Sonpool4_ID" field.</summary>
    public const int Sonpool4IDFieldNumber = 5;
    private int sonpool4ID_;
    /// <summary>
    /// 品质4池ID
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int Sonpool4ID {
      get { return sonpool4ID_; }
      set {
        sonpool4ID_ = value;
      }
    }

    /// <summary>Field number for the "Sonpool5_ID" field.</summary>
    public const int Sonpool5IDFieldNumber = 6;
    private int sonpool5ID_;
    /// <summary>
    /// 品质5池ID
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int Sonpool5ID {
      get { return sonpool5ID_; }
      set {
        sonpool5ID_ = value;
      }
    }

    /// <summary>Field number for the "Sonpool6_ID" field.</summary>
    public const int Sonpool6IDFieldNumber = 7;
    private int sonpool6ID_;
    /// <summary>
    /// 品质6池ID
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int Sonpool6ID {
      get { return sonpool6ID_; }
      set {
        sonpool6ID_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as Sonpool);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(Sonpool other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (PoolID != other.PoolID) return false;
      if (Sonpool1ID != other.Sonpool1ID) return false;
      if (Sonpool2ID != other.Sonpool2ID) return false;
      if (Sonpool3ID != other.Sonpool3ID) return false;
      if (Sonpool4ID != other.Sonpool4ID) return false;
      if (Sonpool5ID != other.Sonpool5ID) return false;
      if (Sonpool6ID != other.Sonpool6ID) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (PoolID != 0) hash ^= PoolID.GetHashCode();
      if (Sonpool1ID != 0) hash ^= Sonpool1ID.GetHashCode();
      if (Sonpool2ID != 0) hash ^= Sonpool2ID.GetHashCode();
      if (Sonpool3ID != 0) hash ^= Sonpool3ID.GetHashCode();
      if (Sonpool4ID != 0) hash ^= Sonpool4ID.GetHashCode();
      if (Sonpool5ID != 0) hash ^= Sonpool5ID.GetHashCode();
      if (Sonpool6ID != 0) hash ^= Sonpool6ID.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (PoolID != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(PoolID);
      }
      if (Sonpool1ID != 0) {
        output.WriteRawTag(16);
        output.WriteInt32(Sonpool1ID);
      }
      if (Sonpool2ID != 0) {
        output.WriteRawTag(24);
        output.WriteInt32(Sonpool2ID);
      }
      if (Sonpool3ID != 0) {
        output.WriteRawTag(32);
        output.WriteInt32(Sonpool3ID);
      }
      if (Sonpool4ID != 0) {
        output.WriteRawTag(40);
        output.WriteInt32(Sonpool4ID);
      }
      if (Sonpool5ID != 0) {
        output.WriteRawTag(48);
        output.WriteInt32(Sonpool5ID);
      }
      if (Sonpool6ID != 0) {
        output.WriteRawTag(56);
        output.WriteInt32(Sonpool6ID);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (PoolID != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(PoolID);
      }
      if (Sonpool1ID != 0) {
        output.WriteRawTag(16);
        output.WriteInt32(Sonpool1ID);
      }
      if (Sonpool2ID != 0) {
        output.WriteRawTag(24);
        output.WriteInt32(Sonpool2ID);
      }
      if (Sonpool3ID != 0) {
        output.WriteRawTag(32);
        output.WriteInt32(Sonpool3ID);
      }
      if (Sonpool4ID != 0) {
        output.WriteRawTag(40);
        output.WriteInt32(Sonpool4ID);
      }
      if (Sonpool5ID != 0) {
        output.WriteRawTag(48);
        output.WriteInt32(Sonpool5ID);
      }
      if (Sonpool6ID != 0) {
        output.WriteRawTag(56);
        output.WriteInt32(Sonpool6ID);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (PoolID != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(PoolID);
      }
      if (Sonpool1ID != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Sonpool1ID);
      }
      if (Sonpool2ID != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Sonpool2ID);
      }
      if (Sonpool3ID != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Sonpool3ID);
      }
      if (Sonpool4ID != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Sonpool4ID);
      }
      if (Sonpool5ID != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Sonpool5ID);
      }
      if (Sonpool6ID != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Sonpool6ID);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(Sonpool other) {
      if (other == null) {
        return;
      }
      if (other.PoolID != 0) {
        PoolID = other.PoolID;
      }
      if (other.Sonpool1ID != 0) {
        Sonpool1ID = other.Sonpool1ID;
      }
      if (other.Sonpool2ID != 0) {
        Sonpool2ID = other.Sonpool2ID;
      }
      if (other.Sonpool3ID != 0) {
        Sonpool3ID = other.Sonpool3ID;
      }
      if (other.Sonpool4ID != 0) {
        Sonpool4ID = other.Sonpool4ID;
      }
      if (other.Sonpool5ID != 0) {
        Sonpool5ID = other.Sonpool5ID;
      }
      if (other.Sonpool6ID != 0) {
        Sonpool6ID = other.Sonpool6ID;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            PoolID = input.ReadInt32();
            break;
          }
          case 16: {
            Sonpool1ID = input.ReadInt32();
            break;
          }
          case 24: {
            Sonpool2ID = input.ReadInt32();
            break;
          }
          case 32: {
            Sonpool3ID = input.ReadInt32();
            break;
          }
          case 40: {
            Sonpool4ID = input.ReadInt32();
            break;
          }
          case 48: {
            Sonpool5ID = input.ReadInt32();
            break;
          }
          case 56: {
            Sonpool6ID = input.ReadInt32();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            PoolID = input.ReadInt32();
            break;
          }
          case 16: {
            Sonpool1ID = input.ReadInt32();
            break;
          }
          case 24: {
            Sonpool2ID = input.ReadInt32();
            break;
          }
          case 32: {
            Sonpool3ID = input.ReadInt32();
            break;
          }
          case 40: {
            Sonpool4ID = input.ReadInt32();
            break;
          }
          case 48: {
            Sonpool5ID = input.ReadInt32();
            break;
          }
          case 56: {
            Sonpool6ID = input.ReadInt32();
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code